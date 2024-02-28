import "@/styles/globals.css";
import Editor from "@/components/editor";
import List from "@/components/explorer/list";
import Path from "@/components/explorer/path";
import Branch from "@/components/branch";
import GitCommand from "@/components/git-command";

function App() {
  return (
    <div className=" flex w-full min-h-screen">
      <List />
      <main className="flex flex-col flex-auto w-full ">
        <section className="flex items-center justify-between p-2">
          <Path />
          <div className="flex items-center justify-center gap-2 mr-2">
            <Branch />
            <GitCommand />
          </div>
        </section>

        <Editor />
      </main>
    </div>
  );
}

export default App;
