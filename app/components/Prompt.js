const React = require('react'),
      PropTypes = React.PropTypes,
      Jumbotron = require('./JumbotronWrapper')

const Prompt = (props) => (
      <Jumbotron>
        <h1>{props.header}</h1>
        <div className='col-sm-4 col-sm-offset-4'>
          <form onSubmit={props.submitUser}>
            <div className="form-group">
              <input
                value={props.username}
                onChange={props.updateUserName}
                className="form-control"
                placeholder="GitHub Username"
                type="text" />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button
                className="btn btn-block btn-success"
                type="submit">
                Continue
              </button>
            </div>
          </form>
        </div>
      </Jumbotron>
    )

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  updateUserName: PropTypes.func.isRequired,
  submitUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
}

module.exports = Prompt
