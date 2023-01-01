export type Category = {
  title: string;
  completed: boolean;
  100: Prompt;
  200: Prompt;
  300: Prompt;
  400: Prompt;
  500: Prompt;
};

export interface Prompt{
  prompt:string;
  response: string;
}
