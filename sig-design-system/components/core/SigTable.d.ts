/** SIG data table: navy header rule, zebra rows, optional subject and average rows. */
export interface SigTableProps {
  columns: { label: string; align?: "left" | "right" }[];
  rows: React.ReactNode[][];
  zebra?: boolean;
  /** Orange-tinted bold row pinned to the top (the subject property) */
  subjectRow?: React.ReactNode[];
  /** Bold summary row with heavy bottom rule */
  averageRow?: React.ReactNode[];
}
export declare function SigTable(props: SigTableProps): JSX.Element;
