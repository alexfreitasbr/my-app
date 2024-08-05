import Image from "next/image";
import { Input } from "./components/form/forms/input-field";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Input label="label" />
      <Input label="label" title="title" placeHolder='place holder' message="message" required={true} tooltip="tooltip"/>
    </main>
  );
}
