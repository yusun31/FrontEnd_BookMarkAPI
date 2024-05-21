// import NavBar from "./components/NavBar";
import NavBar from "@/app/components/NavBar"; // @ -> bookmarker-client-ts/src

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <h1>Welcome to Bookmarker</h1>
      </main>
    </div>
  );
}
