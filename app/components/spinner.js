import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

export default function Spinner() {
    return <FontAwesomeIcon icon={faSpinner} className={"fa-spin fa-2x"} />
}