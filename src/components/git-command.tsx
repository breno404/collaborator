import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaGitAlt } from "react-icons/fa";
import {
  FaCodeBranch,
  FaCodeCommit,
  FaCodeCompare,
  FaCodeMerge,
  FaCodePullRequest,
} from "react-icons/fa6";

function ConfigMenuGroup() {
  return (
    <DropdownMenuGroup>
      <DropdownMenuLabel className="text-[1.4rem]">
        Configuração
      </DropdownMenuLabel>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger className="text-[1.4rem]">
          Config
        </DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent className="mr-2">
            <DropdownMenuItem className="text-[1.4rem]">Email</DropdownMenuItem>
            <DropdownMenuItem className="text-[1.4rem]">
              Username
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
    </DropdownMenuGroup>
  );
}

function BasicMenuGroup() {
  return (
    <DropdownMenuGroup>
      <DropdownMenuLabel className="text-[1.4rem]">Básico</DropdownMenuLabel>
      <DropdownMenuItem className="text-[1.4rem]">Add</DropdownMenuItem>
      <DropdownMenuItem className="text-[1.4rem]">
        Commit
        <DropdownMenuShortcut className="text-[1.4rem]">
          <FaCodeCommit />
        </DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger className="text-[1.4rem]">
          Remote
        </DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent className="mr-2">
            <DropdownMenuItem className="text-[1.4rem]">Add</DropdownMenuItem>
            <DropdownMenuItem className="text-[1.4rem]">
              Rename
            </DropdownMenuItem>
            <DropdownMenuItem className="text-[1.4rem]">
              Remove
            </DropdownMenuItem>
            <DropdownMenuItem className="text-[1.4rem]">Show</DropdownMenuItem>
            <DropdownMenuItem className="text-[1.4rem]">Prune</DropdownMenuItem>
            <DropdownMenuItem className="text-[1.4rem]">
              Update
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
      <DropdownMenuItem className="text-[1.4rem]">Restore</DropdownMenuItem>
      <DropdownMenuItem className="text-[1.4rem]">Reset</DropdownMenuItem>
      <DropdownMenuItem className="text-[1.4rem]">RM</DropdownMenuItem>
      <DropdownMenuItem className="text-[1.4rem]">MV</DropdownMenuItem>
    </DropdownMenuGroup>
  );
}

function BranchMergeMenuGroup() {
  return (
    <DropdownMenuGroup>
      <DropdownMenuLabel className="text-[1.4rem]">
        Ramificação e Fusão
      </DropdownMenuLabel>
      <DropdownMenuItem className="text-[1.4rem]">
        Branch
        <DropdownMenuShortcut className="text-[1.4rem]">
          <FaCodeBranch />
        </DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem className="text-[1.4rem]">Checkout</DropdownMenuItem>
      <DropdownMenuItem className="text-[1.4rem]">
        Merge
        <DropdownMenuShortcut className="text-[1.4rem]">
          <FaCodeMerge />
        </DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger className="text-[1.4rem]">
          Stash
        </DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent className="mr-2">
            <DropdownMenuItem className="text-[1.4rem]">List</DropdownMenuItem>
            <DropdownMenuItem className="text-[1.4rem]">Show</DropdownMenuItem>
            <DropdownMenuItem className="text-[1.4rem]">Drop</DropdownMenuItem>
            <DropdownMenuItem className="text-[1.4rem]">Pop</DropdownMenuItem>
            <DropdownMenuItem className="text-[1.4rem]">Apply</DropdownMenuItem>
            <DropdownMenuItem className="text-[1.4rem]">
              Branch
            </DropdownMenuItem>
            <DropdownMenuItem className="text-[1.4rem]">Save</DropdownMenuItem>
            <DropdownMenuItem className="text-[1.4rem]">Clear</DropdownMenuItem>
            <DropdownMenuItem className="text-[1.4rem]">
              Create
            </DropdownMenuItem>
            <DropdownMenuItem className="text-[1.4rem]">Store</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
      <DropdownMenuItem className="text-[1.4rem]">Tag</DropdownMenuItem>
    </DropdownMenuGroup>
  );
}

function SharingUpdateMenuGroup() {
  return (
    <DropdownMenuGroup>
      <DropdownMenuLabel className="text-[1.4rem]">
        Compartilhamento e Atualização
      </DropdownMenuLabel>
      <DropdownMenuItem className="text-[1.4rem]">Fetch</DropdownMenuItem>
      <DropdownMenuItem className="text-[1.4rem]">
        Pull
        <DropdownMenuShortcut className="text-[1.4rem]">
          <FaCodePullRequest />
        </DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem className="text-[1.4rem]">Push</DropdownMenuItem>
    </DropdownMenuGroup>
  );
}

function PatchingMenuGroup() {
  return (
    <DropdownMenuGroup>
      <DropdownMenuLabel className="text-[1.4rem]">Correção</DropdownMenuLabel>
      <DropdownMenuItem className="text-[1.4rem]">
        Diff
        <DropdownMenuShortcut className="text-[1.4rem]">
          <FaCodeCompare />
        </DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem className="text-[1.4rem]">Rebase</DropdownMenuItem>
      <DropdownMenuItem className="text-[1.4rem]">Revert</DropdownMenuItem>
    </DropdownMenuGroup>
  );
}

function GitCommand() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <FaGitAlt className="text-[2rem] text-[#FB4F28]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[24rem] mr-4">
        <ConfigMenuGroup />
        <DropdownMenuSeparator />
        <BasicMenuGroup />
        <DropdownMenuSeparator />
        <BranchMergeMenuGroup />
        <DropdownMenuSeparator />
        <SharingUpdateMenuGroup />
        <DropdownMenuSeparator />
        <PatchingMenuGroup />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default GitCommand;
