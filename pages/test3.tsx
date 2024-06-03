import { useAuth } from "../src/components/commons/hooks/customs/useAuth";

export default function Test3Page(): JSX.Element {
  useAuth();

  return <div>로그인에 성공했습니다.</div>;
}
