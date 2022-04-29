import React from "react";
import { Text, View, Button } from "react-native";
import { useFetch } from "../services/api";
import { useDelete } from "../services/delete";
import { usePost } from "../services/post";

export function Home(){

  const { data, loading } = useFetch('/ws/01001000/json/')

    return(
        <View style={{alignItems: 'center', justifyContent: "center", flex: 1}}>
            <Text>Oi</Text>
            {loading ? <Text>Carregando...</Text> :
            <View>
              <View>
                <Text>
                    {data.bairro}{'\n'}
                    {data.logradouro}{'\n'}
                    {data.localidade}{'\n'}
                </Text>
              </View>
            <Button title="Create New" onPress={() => usePost('/public/v2/users', {
                email: "diogenes@develcode.com",
                gender: "male",
                name: "diogenes",
                status: "active",
              },
              {
                headers: {
                  Authorization: "Bearer a4e3743577c2a9f43ef23ca81f710292e0158b333e74723043f685454876fda1"
                }
              }
                )}/>
              <Button title="Delete" onPress={() => useDelete('/public/v2/users/100', {
                
              })}/>
          </View>
        }
        </View>
    )
}