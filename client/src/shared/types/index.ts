import {InputHTMLAttributes} from 'react';

export interface LoadingSliceFields {
  isLoading: boolean;
  loadingError?: string;
}

export interface SendingSliceFields {
  isSending: boolean;
  sendingError?: string;
}

export type LoadingAndSendingSliceFields = LoadingSliceFields & SendingSliceFields;

export type ServerSuccessesMassage = {
  message: string
}

export type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>
export type FontSizes = 'hint' | 'notice' | 'primary' | 'accent' | 'subtitle' | 'title' | 'promo-title'