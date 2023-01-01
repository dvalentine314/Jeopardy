export type Category = {
  [amount in '100' | '200' | '300' | '400' | '500']: Prompt;
} & {
  title: string;
  completed: boolean;
};

export interface Prompt{
  prompt:string;
  response: string;
}
