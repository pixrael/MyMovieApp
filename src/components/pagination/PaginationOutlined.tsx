import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationOutlined({ count, isDisabled = false, onPageChange, maxTotalPages = 500 }: { count: number, isDisabled?: boolean, onPageChange: Function, maxTotalPages?: number }) {
    return (
        <Stack spacing={2}>
            <Pagination count={(maxTotalPages && count > maxTotalPages) ? maxTotalPages : count} variant="outlined" disabled={isDisabled} onChange={(evt, page) => onPageChange(page)} />
        </Stack>
    );
}