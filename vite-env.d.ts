/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string;
  readonly VITE_BASE_PATH?: string;
  readonly GITHUB_PAGES_BASE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

