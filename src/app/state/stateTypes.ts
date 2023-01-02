export type Category = {
  title: string;
  100: Prompt;
  200: Prompt;
  300: Prompt;
  400: Prompt;
  500: Prompt;
};

export class Prompt{
  prompt?:string;
  response?: string;
  read: boolean=false;
}
