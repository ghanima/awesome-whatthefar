// tslint:disable:max-classes-per-file

// Needed for all mixins
type Constructor<T = {}> = new (...args: any[]) => T;

////////////////////
// Example mixins
////////////////////

// A mixin that adds a property
function Timestamped<TBase extends Constructor>(Base: TBase) {
	return class extends Base {
		public timestamp = Date.now();
	};
}

// a mixin that adds a property and methods
function Activatable<TBase extends Constructor>(Base: TBase) {
	return class extends Base {
		public isActivated = false;

		public activate() {
			this.isActivated = true;
		}

		public deactivate() {
			this.isActivated = false;
		}
	};
}

////////////////////
// Usage to compose classes
////////////////////

// Simple class
class User {
	public name = '';
}

// User that is Timestamped
const TimestampedUser = Timestamped(User);

// User that is Timestamped and Activatable
const TimestampedActivatableUser = Timestamped(Activatable(User));

////////////////////
// Using the composed classes
////////////////////

const timestampedUserExample = new TimestampedUser();
console.log(timestampedUserExample.timestamp);

const timestampedActivatableUserExample = new TimestampedActivatableUser();
console.log(timestampedActivatableUserExample.timestamp);
console.log(timestampedActivatableUserExample.isActivated);
