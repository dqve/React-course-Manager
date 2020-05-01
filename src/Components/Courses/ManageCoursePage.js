import React, { Component } from "react"
import { connect } from "react-redux"
import * as courseActions from "../../redux/actions/courseActions"
import * as authorActions from "../../redux/actions/authorActions"
import PropTypes from "prop-types"
import { bindActionCreators } from "redux"


class ManageCoursePage extends Component {
  
  componentDidMount() {
    const { courses, authors, actions, loadCourses, loadAuthors } = this.props;

    if (courses.length === 0) {
      loadCourses().catch(error => {
        alert("Loading courses failed" + error)
      })
    }

    if (courses.length === 0) {
      loadAuthors().catch(error => {
        alert("Loading authors failed" + error)
      })
    }
  }


   render() {
    return (
      <>
        <h2>Manage Course</h2>
      </>
    )
  }
}

ManageCoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors
  };
}

const mapDispatchToProps = {
      loadCourses,
      loadAuthors
   };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursePage);
