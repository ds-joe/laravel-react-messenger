// Types
import type { ReactNode, ComponentPropsWithoutRef } from "react";

export interface FormErrorsProps {
  errors?: Record<string, ReactNode>
}

export interface FormProps extends ComponentPropsWithoutRef<'form'> {
  children?: ReactNode
}

export interface FormInputProps extends ComponentPropsWithoutRef<'input'> {
  freeze?: boolean,
  error?: string;
  label?: string;
  helperText?: string
}

export interface FormGroupProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode
}

export interface FormGroupDoubleProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode,
}