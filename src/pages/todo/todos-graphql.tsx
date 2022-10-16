import { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import styles from '../../styles/Home.module.css';
import {
  useListTodosQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
  ListTodosQueryResult,
} from '../../graphql';

type Todo = ListTodosQueryResult['data']['todos'][0];

export const TodoList: React.FC = () => {
  const { data, loading, error } = useListTodosQuery({
    variables: {
      where: {
        completed: { equals: false },
      },
    },
  });
  const todos = data?.todos ?? [];

  if (error != null) return <div>Error loading todos...</div>;
  if (loading) return <div>Loading...</div>;

  if (todos.length === 0) {
    return <div className={styles.emptyState}>Try adding a todo ☝️️</div>;
  }

  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  return (
    <li className={styles.todo}>
      <label
        className={`${styles.label} ${todo.completed ? styles.checked : ''}`}
      >
        <input
          type="checkbox"
          checked={todo.completed}
          className={`${styles.checkbox}`}
          onChange={() =>
            updateTodo({
              variables: {
                where: {
                  id: todo.id,
                },
                data: {
                  completed: {
                    set: !todo.completed,
                  },
                },
              },
            })
          }
        />
        {todo.text}
      </label>

      <button
        className={styles.deleteButton}
        onClick={() =>
          deleteTodo({
            variables: {
              where: {
                id: todo.id,
              },
            },
          })
        }
      >
        ✕
      </button>
    </li>
  );
};

const AddTodoInput = () => {
  const [text, setText] = useState('');
  const [createTodo] = useCreateTodoMutation();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        createTodo({
          variables: {
            data: {
              text,
              completed: false,
            },
          },
        });
        setText('');
      }}
      className={styles.addTodo}
    >
      <input
        className={styles.input}
        placeholder="Buy some milk"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className={styles.addButton}>Add</button>
    </form>
  );
};

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Railway NextJS Prisma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>Todos</h1>
        <h2 className={styles.desc}>
          NextJS app connected to Postgres using Prisma and hosted on{' '}
          <a href="https://railway.app">Railway</a>
        </h2>
      </header>

      <main className={styles.main}>
        <AddTodoInput />

        <TodoList />
      </main>
    </div>
  );
};

export default Home;
