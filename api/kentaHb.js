import request from '@/utils/request'

export const getIndexData = () => {
	return request({
		url: '/kenta-hb/get_index_data',
		method: 'get',
	})
}
export const getIdByName = (params) => {
	return request({
		url: '/kenta-hb/get_id_by_name',
		method: 'post',
		data: params
	})
}
export const updateHotelsInfo = (params) => {
	return request({
		url: '/kenta-hb/update_hotels_info',
		method: 'post',
		data: params
	})
}
export const getHotelsByRegion = (params) => {
	return request({
		url: '/kenta-hb/get_hotels_by_region',
		method: 'post',
		data: params
	})
}
export const getHotelInfo = (params) => {
	return request({
		url: '/kenta-hb/get_hotel_info',
		method: 'post',
		data: params
	})
}
export const tickets = (params) => {
	return request({
		url: '/kenta-hb/event/v1/tickets',
		method: 'post',
		data: params
	})
}