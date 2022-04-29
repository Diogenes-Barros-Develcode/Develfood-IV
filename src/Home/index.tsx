import React from "react";
import { Text, View, Button, BackHandler } from "react-native";
import { useFetch } from "../services/api";
import { usePost } from "../services/post";

export function Home(){

  const { data, loading } = useFetch('/ws/01001000/json/')

    return(
        <View>
            <Text>Oi</Text>
            {loading ? <Text>Carregando...</Text> :
            <View>
            <Button title="Create New" onPress={() => usePost('/public/v2/users', {
                email: "diogenes@develcode.com",
                gender: "male",
                name: "diogenes",
                status: "active",
              },
              {
                headers: {
                  Authorization: 'Bearer daf3a258b8841c825fae207d9a61a5f5d69bcdaac7086cb868b59da6efc9f25f'
                }
              }
                )}/>
              <Button title="Delete"/>

              <View>
                <Text>
                    {data.bairro}{'\n'}
                    {data.logradouro}{'\n'}
                    {data.localidade}{'\n'}
                </Text>
              </View>
          </View>
        }
        </View>
    )
}