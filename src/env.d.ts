/// <reference types="@rsbuild/core/types" />

interface ImportMetaEnv {
	readonly PUBLIC_BASE_PATH?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
