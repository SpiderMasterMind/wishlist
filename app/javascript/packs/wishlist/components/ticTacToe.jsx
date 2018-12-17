import React from 'react';
import TicTacToeErrors from './ticTacToeErrors';

class TicTacToe extends React.Component {
    constructor(props) {
        super(props);
        this.defaultEvents = this.defaultEvents.bind(this);
    }

    defaultEvents() {
        window.addEventListener('mousedown', function(e) {
            document.body.classList.add('mouse-navigation');
            document.body.classList.remove('kbd-navigation');
        });
        window.addEventListener('keydown', function(e) {
            if (e.keyCode === 9) {
                document.body.classList.add('kbd-navigation');
                document.body.classList.remove('mouse-navigation');
            }
        });
        window.addEventListener('click', function(e) {
            if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
                e.preventDefault();
            }
        });
        window.onerror = function(message, source, line, col, error) {
            var text = error ? error.stack || error : message + ' (at ' + source + ':' + line + ':' + col + ')';
            errors.textContent += text + '\n';
            errors.style.display = '';
        };
        console.error = (function(old) {
            return function error() {
                errors.textContent += Array.prototype.slice.call(arguments).join(' ') + '\n';
                errors.style.display = '';
                old.apply(this, arguments);
            }
        })(console.error);
    }

    render() {
        return (
            <div className="tictactoe">
                <div className="tictactoe-errors">
                    <TicTacToeErrors />
                </div>
                <div className="tictactoe-board">
                    <Board />
                </div>
                <div className="tictactoe-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        value: null,
    }
  }

  render() {
    return (
      <button className="square"
              onClick={ () => { this.setState({ value: 'X' }) } }
      >
          {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
export default TicTacToe