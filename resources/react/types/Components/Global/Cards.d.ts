// Types
import type { ComponentPropsWithoutRef, ComponentPropsWithRef, ReactNode } from "react";

export interface CardProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode
}

export interface CardHeaderProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode
}


export interface CardBodyProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode
}


export interface CardTitleProps extends ComponentPropsWithoutRef<'h2'> {
  children?: ReactNode
}


export interface CardSubtitleProps extends ComponentPropsWithoutRef<'p'> {
  children?: ReactNode
}


export interface CardActionsProps extends ComponentPropsWithRef<'div'> {
  children?: ReactNode
}