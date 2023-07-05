import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import api from "../api/api.mjs";

const fetchPersons = async () => {
  const response = await api.get("/persons");
  return response.data;
};

export const useFetchPersons = () => {
  return useQuery({
    queryKey: ["persons"],
    queryFn: fetchPersons
  });
};

const registerPerson = async (person) => {
  await api.post("/persons", person);
};

export const useRegisterPerson = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: registerPerson,
    onSuccess: () => {
      queryClient.invalidateQueries("persons");
      console.log("Person registered!!");
    }
  });
};

const deletePerson = async (id) => {
  await api.delete(`/persons/${id}`);
};

export const useDeletePerson = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePerson,
    onSuccess: () => {
      queryClient.invalidateQueries("persons");
      console.log("Person deleted!!");
    }
  });
};

const updatePerson = async (person) => {
  await api.patch(`/persons/${person.id}`, person);
};

export const useUpdatePerson = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updatePerson,
    onSuccess: () => {
      queryClient.invalidateQueries("persons");
      console.log("person updated!!");
    }
  });
};
