export type BuildPaths = {
  entry: string;
  html: string;
  public: string;
  output: string;
  src: string;
}

export type BuildMode = 'production' | 'development';

export type BuildOptions = {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
  analyzer?: boolean,
  captcha?: boolean,
  apiUrl: string;
}

export interface BuildEnvs {
  mode: BuildMode,
  analyzer?: boolean,
  port: number,
  captcha: boolean,
  apiUrl: string
}