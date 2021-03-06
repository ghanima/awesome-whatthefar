import { CsvInput } from '../csv';
import { TableOptions } from './table';

export interface MarkdownPage {
	type: 'MarkdownPage';
	title: string;
	description?: string;
	items?: MarkdownItem[];
	options?: MarkdownPageOptions;
}

export interface MarkdownPageOptions {
	tableOfContent: boolean;
}

export const defaultMarkdownPageOptions: Required<MarkdownPageOptions> = {
	tableOfContent: true
};

export type MarkdownItem =
	| MarkdownSection
	| MarkdownTable
	| MarkdownHeader
	| MarkdownPlainText
	| MarkdownList;

export interface MarkdownSection {
	type: 'MarkdownSection';
	title: string;
	description?: string;
	items?: MarkdownItem[];
}

export interface MarkdownTable {
	type: 'MarkdownTable';
	title: string;
	description?: string;
	data: {
		input: CsvInput;
		options?: TableOptions;
	};
}

export interface MarkdownHeader {
	type: 'MarkdownHeader';
	title: string;
	size: number;
}

export interface MarkdownPlainText {
	type: 'MarkdownPlainText';
	text: string;
}

export interface MarkdownList {
	type: 'MarkdownList';
	list?: MarkdownListItem[];
}

export type MarkdownListItem = string | MarkdownList;
