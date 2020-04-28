import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as courseActions from '../../redux/actions/courseActions'

class CoursesPage extends Component {

    state = {
        course: {
            title: ""
        }
    }

    handleChange = event => {
        const course = {
            ...this.state.course,
            title: event.target.value
        }
        this.setState({
            course
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert(this.state.course.title)
    }
    render() {

        return ( <
            form onSubmit = {
                this.handleSubmit
            } >
            <
            h2 > Courses < /h2>  <
            h3 > Add Courses < /h3>  <
            input type = "text"
            onChange = {
                this.handleChange
            }
            value = {
                this.state.course.title
            }
            />  <
            input type = "submit"
            value = "submit" /
            >
            <
            /form>
        )
    }
}

function mapStateToProps(state, ownProps){
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps)(CoursesPage)