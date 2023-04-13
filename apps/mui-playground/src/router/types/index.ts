import type { FC } from 'react';

export interface RouteType {
  Element: FC;
  children?: RouteType[];
  name?: string;
  path: string;
}
