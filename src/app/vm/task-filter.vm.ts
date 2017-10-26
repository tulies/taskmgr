import { User } from '../domain';

export interface TaskFilterVM {
  id: string | undefined;
  projectId: string;
  desc?: string;
  sort: string;
  hasOwner: boolean;
  hasDueDate: boolean;
  hasPriority: boolean;
  sortVMs: TaskFilterItemVM[],
  ownerVMs: TaskFilterOwnerVM[];
  dueDateVMs: TaskFilterItemVM[],
  priorityVMs: TaskFilterPriorityVM[];
  categoryVMs: TaskFilterItemVM[];
}

export interface TaskFilterItemVM {
  label: string;
  value: string;
  checked: boolean;
}

export interface TaskFilterOwnerVM {
  owner?: User;
  checked: boolean;
}

export interface TaskFilterPriorityVM {
  label: string;
  value: number;
  checked: boolean;
}
