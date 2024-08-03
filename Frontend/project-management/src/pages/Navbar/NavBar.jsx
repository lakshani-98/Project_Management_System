import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import { Button } from "@/components/ui/button";
import CreateProjectForm from "../Project/CreateProjectForm";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuIcon, PersonIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="border-b py-4 px-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <p onClick ={()=> navigate("/")} className="cursor-ponter">Project Management</p>
        <Dialog>
          <DialogTrigger>
            <Button variant="ghost">New Project</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>Create New Project</DialogHeader>
            <CreateProjectForm />
          </DialogContent>
        </Dialog>
        <Button>Upgrade</Button>
      </div>
      <div className="flex gap-3 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-2 border-purple-500"
            >
              <PersonIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>LogOut</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default NavBar;
