const SetUpData = () => {
  localStorage.setItem(
    "users",
    JSON.stringify([
      {
        _id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
      },
      {
        _id: 2,
        firstName: "Koffi",
        lastName: "Yao",
        email: "koffiy@example.com",
      },
      {
        _id: 3,
        firstName: "Soro",
        lastName: "Aymard",
        email: "soroa@example.com",
      },
    ])
  );
};

export { SetUpData };
