import { ReactNode, useState } from "react";
import {
  FcFolder,
  FcOpenedFolder,
  FcDocument,
  //   FcVideoFile,
  //   FcImageFile,
} from "react-icons/fc";

interface DefaultProps {
  name: string;
  space: "0" | "8";
}

interface FolderProps extends DefaultProps {
  children?: ReactNode;
}

interface FileProps extends DefaultProps {
  icon?: ReactNode;
}

const Folder = ({ name, space = "0", children }: FolderProps) => {
  const [open, setOpen] = useState(false);
  const classSpace = "pl-" + space;
  return (
    <button
      className={`${
        !open ? "h-[2.5rem]" : "h-auto"
      } overflow-y-hidden animate-accordion-down duration-200 flex flex-col w-full my-1 ${classSpace} hover:bg-slate-100`}
      onClick={(evt) => {
        evt.stopPropagation();
        setOpen(!open);
      }}
    >
      <div className="flex items-center rounded-lg px-2">
        {open ? (
          <FcOpenedFolder className="my-auto ml-1 mr-2 text-[2.5rem]" />
        ) : (
          <FcFolder className="my-auto ml-1 mr-2 text-[2.5rem]" />
        )}
        <span className="text-[1.6rem] max-w-full text-ellipsis">{name}</span>
      </div>
      {children}
    </button>
  );
};

const File = ({
  name,
  space = "0",
  icon = <FcDocument className="my-auto ml-1 mr-2 text-[2.5rem]" />,
}: FileProps) => {
  const classSpace = "pl-" + space;

  return (
    <button
      className={`overflow-y-hidden animate-accordion-down duration-200 w-full ${classSpace} my-1  hover:bg-slate-200`}
    >
      <div className="flex items-cente rounded-lg px-2">
        {icon}
        <span className="text-[1.6rem] max-w-full text-ellipsis">{name}</span>
      </div>
    </button>
  );
};

function List() {
  return (
    <div className="sticky top-0 flex flex-col w-[30rem] h-[100vh] border-r shadow-md">
      <Folder space="0" name="spe">
        <File space="8" name="index.html" />
        <Folder space="8" name="src">
          <File
            space="8"
            // icon={<FcImageFile className="my-auto ml-1 mr-2 text-[2.5rem]" />}
            name="app.tsx"
          />
          <File
            space="8"
            // icon={<FcVideoFile className="my-auto ml-1 mr-2 text-[2.5rem]" />}
            name="app.css"
          />
        </Folder>
      </Folder>
      <Folder space="0" name="breno.github.io" />
      <Folder space="0" name="controle-de-propostas" />
      <Folder space="0" name="build-your-own-x" />
    </div>
  );
}

export default List;
