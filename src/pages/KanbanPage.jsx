import { useState } from "react";
import { Box, Container, Heading, VStack } from "@chakra-ui/react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialTasks = {
  todo: [
    { id: "1", content: "Task 1" },
    { id: "2", content: "Task 2" },
  ],
  inProgress: [
    { id: "3", content: "Task 3" },
  ],
  done: [
    { id: "4", content: "Task 4" },
  ],
};

const KanbanPage = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceColumn = tasks[source.droppableId];
    const destColumn = tasks[destination.droppableId];
    const [removed] = sourceColumn.splice(source.index, 1);
    destColumn.splice(destination.index, 0, removed);

    setTasks({
      ...tasks,
      [source.droppableId]: sourceColumn,
      [destination.droppableId]: destColumn,
    });
  };

  return (
    <Container maxW="container.lg" py={4}>
      <Heading mb={4}>Kanban Board</Heading>
      <DragDropContext onDragEnd={onDragEnd}>
        <Box display="flex" justifyContent="space-between">
          {Object.keys(tasks).map((columnId) => (
            <Droppable key={columnId} droppableId={columnId}>
              {(provided) => (
                <VStack
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  bg="gray.100"
                  p={4}
                  borderRadius="md"
                  w="30%"
                  minH="400px"
                >
                  <Heading size="md" mb={4}>
                    {columnId.charAt(0).toUpperCase() + columnId.slice(1)}
                  </Heading>
                  {tasks[columnId].map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <Box
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          p={4}
                          bg="white"
                          borderRadius="md"
                          boxShadow="md"
                          mb={4}
                          w="100%"
                        >
                          {task.content}
                        </Box>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </VStack>
              )}
            </Droppable>
          ))}
        </Box>
      </DragDropContext>
    </Container>
  );
};

export default KanbanPage;