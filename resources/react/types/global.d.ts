import { AxiosInstance } from 'axios';
import React, { ReactNode } from 'react';
import { route as ziggyRoute } from 'ziggy-js';
import { SetupOptions } from "@inertiajs/inertia-react";


declare global {
  interface Window {
    axios: AxiosInstance;
  }

  var route: typeof ziggyRoute;

  /** ***********************************************************************
   *  In coming data from sever
   ************************************************************************ */
  // React Components
  type RC<Props extends {} = {}> = React.FC<Props>; // React Components
  interface RP<P = {}> extends React.FC<P> {
    layout?: (
      page: SetupOptions<unknown, PageProps>["props"]["initialPage"]
    ) => JSX.Element;
  } // React page
  type RPO<Props extends {} = {}> = React.FC<Props & {
    children?: ReactNode
  }>; // React Provider
  type RPL<Props extends {} = {}> = React.FC<Props & {
    children?: ReactNode;
    title?: string;
  }>; // React Layout

}
