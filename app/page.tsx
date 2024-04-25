import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="border-black border-2 flex justify-center items-center p-3">
        <Button className="text-black" variant={"destructive"} size={"custom"}>
          {" "}
          Click Me
        </Button>

      </div>
    </>
  );
}
