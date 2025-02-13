import type { IRoom } from '@rocket.chat/core-typings';
import type { ReactElement } from 'react';
import React from 'react';

import ParentRoom from './ParentRoom';
import { HeaderTagSkeleton } from '../../../components/Header';
import { useRoomInfoEndpoint } from '../../../hooks/useRoomInfoEndpoint';

type ParentRoomWithEndpointDataProps = {
	rid: IRoom['_id'];
};

const ParentRoomWithEndpointData = ({ rid }: ParentRoomWithEndpointDataProps): ReactElement | null => {
	const { data, isLoading, isError } = useRoomInfoEndpoint(rid);

	if (isLoading) {
		return <HeaderTagSkeleton />;
	}

	if (isError || !data?.room) {
		return null;
	}

	return <ParentRoom room={data.room} />;
};

export default ParentRoomWithEndpointData;
