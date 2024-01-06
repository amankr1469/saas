'use client'
import { Button } from "./ui/button";
import {MessageSquarePlusIcon} from "lucide-react";
import { useRouter } from "next/navigation";

function CreateChatButton() {

    const createNewChat = () => {
        console.log("Create new chat")
    }
  return (
    <Button variant={"ghost"} onClick={createNewChat}>
        <MessageSquarePlusIcon />
    </Button>
  )
}

export default CreateChatButton