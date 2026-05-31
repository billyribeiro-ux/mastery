/** Shape of a single linked card rendered by `CollectionGrid`. */
export type CollectionItem = {
	title: string;
	copy: string;
	/** Pre-resolved pathname (callers use `resolve(...)`). */
	href: string;
	meta?: string;
	badge?: string;
};
