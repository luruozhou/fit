import React from 'react'
import classNames from 'classnames'
import './index.scss'

function noop() {
}

export default class Switch extends React.Component {
    constructor(props) {
        super(props)

        const _props = this.props
        let checked = false
        if ('checked' in _props) {
            checked = _props.checked
        } else {
            checked = _props.defaultChecked
        }
        this.state = {
            checked: checked
        }
    }

    componentWillReceiveProps(nextProps) {
        if ('checked' in nextProps) {
            this.setState({
                checked: nextProps.checked
            })
        }
    }

    toggle() {
        const checked = !this.state.checked
        this.setState({
            checked: checked
        })
        this.props.onChange(checked)
    }

    render() {
        const {className, disabled, style,
            checkedChildren, unCheckedChildren} = this.props;
        const checked = this.state.checked;
        const switchClassName = classNames({
            '_namespace': true,
            [className]: !!className,
            [`checked`]: checked,
            [`disabled`]: disabled,
            [this.props.type || 'info']: true,
            [`size-${this.props.size || 'normal'}`]: true
        })
        return (
            <span className={switchClassName}
                  onClick={disabled ? noop : this.toggle.bind(this)}
                  style={style}>
              <span className={`inner`}>
                {checked ? checkedChildren : unCheckedChildren}
              </span>
            </span>
        )
    }
}

Switch.defaultProps = {
    style: {},
    checkedChildren: null,
    unCheckedChildren: null,
    className: '',
    defaultChecked: false,
    onChange: noop
}