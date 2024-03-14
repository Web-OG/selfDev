import {FunctionComponent, InputHTMLAttributes, SVGProps} from 'react';

export type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>
export type FontColor = 'primary' | 'secondary' | 'focus' | 'success' | 'warning' | 'danger';
export type FontSize =
  'fs-hint'
  | 'fs-notice'
  | 'fs-primary'
  | 'fs-accent'
  | 'fs-subtitle'
  | 'fs-title'
  | 'fs-promo-title'
export type ProjectLanguages = 'ru' | 'en'

export interface LoadingSliceFields {
  isLoading: boolean;
  loadingError?: MultiLanguageMassage;
}

export interface SendingSliceFields {
  isSending: boolean;
  sendingErrorMsg?: MultiLanguageMassage;
  sendingErrorFields?: MappedServerBadRequestErrors;
}

export type LoadingAndSendingSliceFields = LoadingSliceFields & SendingSliceFields

export type MultiLanguageMassage = Record<ProjectLanguages, string>
export type MappedServerBadRequestErrors = { [p: string]: MultiLanguageMassage }

export interface ServerSuccessesMassage {
  message: string
}

export interface ServerBadRequestError<SchemaKeys> {
  type: string,
  value: string,
  msg: MultiLanguageMassage,
  path: SchemaKeys,
  location: string,
}

export interface ServerBadRequestResponse<SchemaKeys> {
  message: MultiLanguageMassage,
  errors?: ServerBadRequestError<SchemaKeys>[]
}

export type SvgReactComponent = FunctionComponent<SVGProps<SVGElement>>