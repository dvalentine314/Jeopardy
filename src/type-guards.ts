export function isAmount(element:String): element is '100'|'200'|'300'|'400'|'500'{
  switch (element){
    case'100': case '200':case '300': case'400':case'500': return true;
    default: return false;
  }
}
