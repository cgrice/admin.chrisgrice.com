import React from 'react'
import Badge from './Badge';

const mapStatusToBadgeType = (status) => {
    if (status === 'PUBLISHED') {
        return 'badge-success'
    }
    if (status === 'DRAFT') {
        return 'badge-primary'
    }
    return null
}
const StatusBadge = ({
    status,
}) => (
    <Badge
        className={mapStatusToBadgeType(status)}
    >
        <span>{status}</span>
    </Badge>
)

export default StatusBadge