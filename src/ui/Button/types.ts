export interface IButton {
  buttonText: string;
  buttonType: 'button' | 'submit' | 'reset';
  onButtonClick: () => void;
  stylesButton?: string;
}
