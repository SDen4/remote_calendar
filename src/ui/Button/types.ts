export interface IButton {
  buttonText: string;
  buttonType: 'button' | 'submit' | 'reset';
  onButtonClick?: (event: React.SyntheticEvent) => void;
  stylesButton?: string;
  disabled?: boolean;
}
