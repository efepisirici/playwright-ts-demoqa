import { test, expect, request } from "@playwright/test";
import { UserData } from './UserData.js';

const userData = new UserData();

const userName = userData.userName;  
const password = userData.password; 

const newUserData = {
  userName: userName,
  password: password,
};

test.describe.configure({ mode: "serial" });

async function createUser(apiContext: ReturnType<typeof request.newContext>, baseURL: string, userData: UserData) {
  const response = await apiContext.post(`${baseURL}/Account/v1/User`, {
    data: {
      userName: userData.userName,
      password: userData.password,
    },
  });
  return {
    response: response,
    responseJson: await response.json(),
  };
}

test.describe('User creation tests', () => {
  let apiContext;
  let token: string;
  let userId;
  let booksIsbn;
  test.beforeAll(async () => {
    apiContext = await request.newContext();
  });

  test('Creation of user account', async ({ baseURL }) => {
    const { response, responseJson } = await createUser(apiContext, baseURL, newUserData);

    expect(response.ok(), `Request failed with status code ${response.status()}`).toBeTruthy();
    expect(response.status()).toBe(201);
    expect(responseJson).toHaveProperty('userID');
    expect(responseJson).toHaveProperty('username');
    expect(responseJson.username).toEqual(newUserData.userName);
    userId = responseJson.userID;
  });

  test('Verify is not possible to create user with the same userName', async ({ baseURL }) => {
    // Attempting to create the same user again to trigger a failure
    const { response, responseJson } = await createUser(apiContext, baseURL, newUserData);

    // Assertions for the failure case
    expect(response.ok()).toBeFalsy();
    expect(response.status()).toBe(406);
    expect(responseJson).toHaveProperty('code');
    expect(responseJson).toHaveProperty('message');
    expect(responseJson.message).toEqual('User exists!');
  });
  test('Generate Token', async ({ baseURL }) => {
      // Get authorization token
      const tokenResponse = await apiContext.post(`${baseURL}/Account/v1/GenerateToken`, {
        data: {
          userName: newUserData.userName,
          password: newUserData.password
        },
      });
  
      expect(tokenResponse.ok(), `Generate Token failed with status: ${tokenResponse.status()}`).toBeTruthy();
      const tokenResponseJson = await tokenResponse.json();
      token = tokenResponseJson.token;
  
});
  test('Get BookList', async ({ baseURL }) => {
  const apiContext = await request.newContext();
  const response = await apiContext.get(`${baseURL}/BookStore/v1/Books`);

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  const responseJson = await response.json();
  const books = responseJson.books;
  const isbns = books.map((book) => book.isbn);
  booksIsbn=isbns;
  });

  test('Add a list of books to a new user', async ({ baseURL }) => {
    const addBooksResponse = await apiContext.post(`${baseURL}/BookStore/v1/Books`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      data: {
        userId: userId,
        /*collectionOfIsbns: [
          {
            isbn: booksIsbn[0], //Will add the first isbn
          },
        ],
      */
      collectionOfIsbns: booksIsbn.map(isbn => ({ isbn }))
    },
    });
  
    expect(addBooksResponse.ok(), `Add Books failed with status: ${addBooksResponse.status()}`).toBeTruthy();
    expect(addBooksResponse.status()).toBe(201); 
  
  });
  
});
