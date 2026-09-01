/** Bracketed fill-in field for per-deal data, e.g. [$0,000,000]. */
export interface PlaceholderFieldProps {
  /** Bracketed placeholder text, e.g. "[TENANT NAME]" */
  children: React.ReactNode;
  dark?: boolean;
  size?: number;
}
export declare function PlaceholderField(props: PlaceholderFieldProps): JSX.Element;
