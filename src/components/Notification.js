import React, { Component } from 'react';
import { Container, Content, Form, Item, Label, Input, Textarea } from 'native-base';
import { observer, inject } from 'mobx-react';

@inject("rootStore")
@observer
class Notification extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: '',
        }
    }

    changeTitle = (e) => {
        /*
        console.log(e.target.value);
        this.setState({
            ...this.state,
            title: e.target.value, 
        });
        */
    }
    changeContent = (e) => {
        
    }
    render() {

        return (
            <Container>
                <Content padder>
                    <Form>
                        <Item floatingLabel>
                            <Label>Title</Label>
                            <Input 
                                name="inputTitle"
                                maxLength={20}
                                onChange={this.changeTitle}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Content</Label>
                            <Input
                                name="inputContent"
                                multiline={true}
                                numberOfLines={10}
                                maxLength={100}
                                onChange={this.changeContent}
                                />
                        </Item>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = {
    notiContainer: {

    },
    titleInput: {
        backgroundColor: 'yellow',
    },
    contentArea: {
        backgroundColor: 'white',
    }
}

export default Notification;