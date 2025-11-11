import { use } from "react";
import { ChecklistsWrapper } from "./components/ChecklistsWrapper";
import { Container } from "./components/Container";
import { Dialog } from "./components/Dialog";
import { FabButton } from "./components/FabButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Heading } from "./components/Heading";
import { IconPlus, IconSchool } from "./components/icons";
import  TodoContext  from "./components/TodoProvider/TodoContext.js"
import { ToDoForm } from "./components/ToDoForm";
import { TodoGroup } from "./components/TodoGroup";
import { EmptyState } from "./components/EmptyState/index.jsx";

// const todos = [
//   {
//     id: 1,
//     description: "JSX e componentes",
//     completed: false,
//     createdAt: "2022-10-31",
//   },
//   {
//     id: 2,
//     description: "Props, state e hooks",
//     completed: false,
//     createdAt: "2022-10-31",
//   },
//   {
//     id: 3,
//     description: "Ciclo de vida dos componentes",
//     completed: false,
//     createdAt: "2022-10-31",
//   },
//   {
//     id: 4,
//     description: "Testes unitários com Jest",
//     completed: false,
//     createdAt: "2022-10-31",
//   },
// ];
// const completed = [
//   {
//     id: 5,
//     description: "Controle de inputs e formulários controlados",
//     completed: true,
//     createdAt: "2022-10-31",
//   },
//   {
//     id: 6,
//     description: "Rotas dinâmicas",
//     completed: true,
//     createdAt: "2022-10-31",
//   },
// ];

function App() {
  const { todos, addTodo, showDialog, editTodo, openFormTodoDialog, closeFormTodoDialog, selectedTodo } = use(TodoContext)



  const handleFormSubmit = (formData) => {
    if (selectedTodo){
      editTodo(formData)
    }else {
      addTodo(formData)
    }
    closeFormTodoDialog()
  }

  

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        <ChecklistsWrapper>

          <TodoGroup 
              heading="Para estudar"
              items={todos.filter(t => !t.completed)}
          />
          {todos.length == 0 && <EmptyState />}

          <TodoGroup 
              heading="Concluído"
              items={todos.filter(t => t.completed)}
          />


          <Footer>
            <Dialog isOpen={showDialog} onClose={closeFormTodoDialog}>
                <ToDoForm 
                  onSubmit={handleFormSubmit}
                  defaultValue={selectedTodo?.description}
                />

            </Dialog>
            <FabButton onClick={() => openFormTodoDialog()}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  );
}

export default App;
