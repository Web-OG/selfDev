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
  captcha?: boolean
}