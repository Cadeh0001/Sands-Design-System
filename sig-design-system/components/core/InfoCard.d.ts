/** Flat squared content card — white with orange top border, or navy. */
export interface InfoCardProps {
  eyebrow?: string;
  title: React.ReactNode;
  children: React.ReactNode;
  footnote?: React.ReactNode;
  dark?: boolean;
}
export declare function InfoCard(props: InfoCardProps): JSX.Element;
