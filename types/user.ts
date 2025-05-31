import { UserInput } from "@/features/users/users.schema";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export interface User {
  id: number;
  name: string | null ;
  email: string;
  avatar: string | null;
  isActive: boolean
  role: string;
}

export interface UsersListsProps {
  data: User[]
}

export type UsersActionDialogProps = {
  currentRow?: User
  open: boolean
  onOpenChange: (open: boolean) => void
}

export type UserForm = {
  name: string
  email: string
  role: 'admin' | 'user'
  avatar: string
  isActive: string
}

export type HandleUserSubmitProps = {
  values: UserInput
  isEdit: boolean
  currentRow?: User
  form: UseFormReturn<UserInput>
  onOpenChange: (open: boolean) => void
  onSuccess: () => void
}


