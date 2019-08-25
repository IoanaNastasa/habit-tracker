import React from "react";
import {
  ListGroupItem,
  InputGroup,
  InputGroupAddon,
  Input,
  Form,
  FormGroup,
  Button
} from "reactstrap";

class NewHabit extends React.Component {
  render() {
    return (
      <ListGroupItem className="list-group-item-light my-2 py-4">
        <Form>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">I want to </InputGroupAddon>
              <Input placeholder="e.g. read, meditate" />
            </InputGroup>
            <Button color="danger" style={{ marginTop: "2rem" }} block>
              Add habit
            </Button>
          </FormGroup>
        </Form>
      </ListGroupItem>
    );
  }
}

export default NewHabit;
