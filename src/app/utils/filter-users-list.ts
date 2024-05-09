import { isWithinInterval } from 'date-fns/isWithinInterval';
import { IFilterOptions } from '../interfaces/filter/filter-options.interface';
import { IUser } from '../interfaces/user/user.interface';

export function filterUsersList(
  filterOptions: IFilterOptions,
  usersList: IUser[]
): IUser[] {
  let filteredList: IUser[] = [];

  filteredList = filterUsersListByName(filterOptions.name, usersList);
  filteredList = filterUsersListByStatus(filterOptions.status, filteredList);
  filteredList = filterUsersListByDate(
    filterOptions.startDate,
    filterOptions.endDate,
    filteredList
  );

  return filteredList;
}

function filterUsersListByName(
  name: string | undefined,
  usersList: IUser[]
): IUser[] {
  const NAME_NOT_TYPPED = name === undefined;

  if (NAME_NOT_TYPPED) {
    return usersList;
  }

  const filteredList = usersList.filter((user) =>
    user.nome.toLowerCase().includes(name.toLowerCase())
  );

  return filteredList;
}

function filterUsersListByStatus(
  status: boolean | undefined,
  usersList: IUser[]
): IUser[] {
  const STATUS_NOT_TYPPED = status === undefined;

  if (STATUS_NOT_TYPPED) {
    return usersList;
  }

  const filteredList = usersList.filter((user) => user.ativo === status);

  return filteredList;
}

function filterUsersListByDate(
  startDate: Date | undefined,
  endDate: Date | undefined,
  usersList: IUser[]
): IUser[] {
  const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined;

  if (DATES_NOT_SELECTED) {
    return usersList;
  }

  const filteredList = usersList.filter((user) =>
    isWithinInterval(new Date(user.dataCadastro), {
      start: startDate,
      end: endDate,
    })
  );

  return filteredList;
}
